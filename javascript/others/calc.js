const getSingleCar = async (
     id,
     contractLengthInMonth,
     annualMileage,
     upfrontPayment,
     includeMaintenance
) => {
     try {
          // // Find the car in the database using its ID
          const carDetails = await carDetailModel.findById({ _id: id });

          const { leaseType_id, price } = carDetails;

          // calculate base price
          let basePrice = price;

          // Retrieve lease type details using leaseTypeId from leasetypes collection
          const leaseTypes = await leaseTypeModel.findById({
               _id: leaseType_id,
          });

          if (!leaseTypes) {
               throw new Error('Lease type details not found');
          }
          const { leaseType } = leaseTypes;

          switch (leaseType) {
               case 'flexi':
                    if (contractLengthInMonth === 6) {
                         basePrice *= 0.8;
                    } else if (contractLengthInMonth === 12) {
                         basePrice *= 0.7;
                    } else if (contractLengthInMonth === 24) {
                         basePrice *= 0.6;
                    } else if (contractLengthInMonth === 36) {
                         basePrice *= 0.5;
                    }
                    break;
               case 'longTerm':
                    if (contractLengthInMonth === 12) {
                         basePrice *= 0.6;
                    } else if (contractLengthInMonth === 24) {
                         basePrice *= 0.5;
                    } else if (contractLengthInMonth === 36) {
                         basePrice *= 0.4;
                    } else if (contractLengthInMonth === 48) {
                         basePrice *= 0.4;
                    }
                    break;
          }

          // convert to monthly price
          let perMonthPrice = basePrice / contractLengthInMonth;

          // apply annualMileage factor
          // switch (annualMileage) {
          //      case 4000:
          //           perMonthPrice *= 0.9; // 10% discount for 4,000 annual mileage
          //           break;
          //      case 6000:
          //           // no discount or markup for 6,000 annual mileage
          //           break;
          //      case 8000:
          //           perMonthPrice *= 1.05; // 5% markup for 8,000 annual mileage
          //           break;
          //      case 10000:
          //           perMonthPrice *= 1.1; // 10% markup for 10,000 annual mileage
          //           break;
          //      case 12000:
          //           perMonthPrice *= 1.2; // 20% markup for 12,000 annual mileage
          //           break;
          // }

          // apply annualMileage factor
          switch (leaseType) {
               case 'flexi':
                    switch (annualMileage) {
                         case 4000:
                              perMonthPrice *= 0.9; // 10% discount for 4,000 annual mileage
                              break;
                         case 6000:
                              // no discount or markup for 6,000 annual mileage
                              break;
                         case 8000:
                              perMonthPrice *= 1.05; // 5% markup for 8,000 annual mileage
                              break;
                         case 10000:
                              perMonthPrice *= 1.1; // 10% markup for 10,000 annual mileage
                              break;
                         case 12000:
                              perMonthPrice *= 1.2; // 20% markup for 12,000 annual mileage
                              break;
                         default:
                              throw new Error(
                                   'Invalid annual mileage for flexi lease.'
                              );
                    }
                    break;
               case 'longTerm':
                    switch (annualMileage) {
                         case 4000:
                              perMonthPrice *= 0.9; // 10% discount for 4,000 annual mileage
                              break;
                         case 6000:
                              // no discount or markup for 6,000 annual mileage
                              break;
                         case 8000:
                              perMonthPrice *= 1.05; // 5% markup for 8,000 annual mileage
                              break;
                         case 10000:
                              perMonthPrice *= 1.1; // 10% markup for 10,000 annual mileage
                              break;
                         case 12000:
                              perMonthPrice *= 1.2; // 20% markup for 12,000 annual mileage
                              break;
                         default:
                              throw new Error(
                                   'Invalid annual mileage for longTerm lease.'
                              );
                    }
                    break;
               default:
                    throw new Error('Invalid lease type.');
          }

          // apply upfrontPayment factor
          switch (upfrontPayment) {
               case 1:
                    perMonthPrice *= 1.1; // 10% markup for 1-month upfront payment
                    break;
               case 3:
                    // no discount or markup for 3-month upfront payment
                    break;
               case 6:
                    perMonthPrice *= 0.95; // 5% discount for 6-month upfront payment
                    break;
               case 9:
                    perMonthPrice *= 0.9; // 10% discount for 9-month upfront payment
                    break;
               case 12:
                    perMonthPrice *= 0.85; // 15% discount for 12-month upfront payment
                    break;
               default:
                    throw new Error('Invalid upfront payment.');
          }

          if (upfrontPayment > 0) {
               let remainingLeaseMonths =
                    contractLengthInMonth - upfrontPayment;
               if (remainingLeaseMonths > 0) {
                    let remainingLeasePrice =
                         perMonthPrice * remainingLeaseMonths;
                    perMonthPrice = remainingLeasePrice / remainingLeaseMonths;
               }
          }

          // apply maintenance factor
          if (includeMaintenance) {
               perMonthPrice *= 1.1; // 10% markup for maintenance inclusion
          }

          // return total price
          let monthlyLeasePrice = perMonthPrice.toFixed();

          return {
               carDetails: carDetails,
               leaseType: leaseType,
               contractLengthInMonth: contractLengthInMonth,
               annualMileage: annualMileage,
               upfrontPayment: upfrontPayment,
               includeMaintenance: includeMaintenance,
               monthlyLeasePrice: monthlyLeasePrice,
          };
     } catch (error) {
          throw new Error(error.message);
     }
};

router.get('/fetch-single/:id/:pdf?', async (req, res) => {
     try {
          const { id } = req.params;

          const {
               leaseType,
               contractLengthInMonth,
               annualMileage,
               upfrontPayment,
               includeMaintenance,
               monthlyLeasePrice,
          } = req.query;

          const result = await CarServices.getSingleCar(
               id,
               contractLengthInMonth,
               annualMileage,
               upfrontPayment,
               includeMaintenance,
               monthlyLeasePrice
          );
          if (!result) {
               res.status(404).json({
                    success: false,
                    message: 'No car found with the specified id.',
               });
               return;
          }
          if (!req.params.pdf) {
               res.status(200).json({ success: true, data: result });
               return;
          }

          // generate PDF
          const pdf = await CarServices.generatePdf(
               id,
               leaseType,
               contractLengthInMonth,
               annualMileage,
               upfrontPayment,
               includeMaintenance,
               result.monthlyLeasePrice
          );
          res.setHeader('Content-Type', 'application/pdf');
          res.send(pdf);
     } catch (error) {
          res.send({ status: 400, success: false, msg: error.message });
     }
});
