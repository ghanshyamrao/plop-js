/**
 *
 * @param {Array<string>} options
 * @param {Number} Id
 * @returns {string} Name by Id
 */
export const convertIdToName = (options, Id) => {
  for (let index = 0; index < options.length; index++) {
    const element = options[index];
    if (element.id == Id) {
      return element.name;
    }
  }
  return;
};
/**
 *
 * @param {Date} startDate
 * @param {Date} endDate
 * @returns return difference betweens startDate and endDate in days.
 */
export const countDaysBetweenTwoDates = (startDate, endDate) => {
  let start_date = new Date(startDate);
  let end_date = new Date(endDate);
  let difference_in_time = end_date.getTime() - start_date.getTime();
  let difference_in_days = difference_in_time / (1000 * 60 * 60 * 24);
  return difference_in_days < 0 ? 0 : Math.floor(difference_in_days);
};

/**
 *
 * @param {Array<Object>} masterData
 * @returns Id of masterValue.
 */
export const setValueOfLastAddedMaster = (masterData) => {
  let length = masterData.length;
  let valueOfMaster = length > 0 ? masterData[length - 1].id : null;
  return valueOfMaster;
};
/**
 *
 * @param {Number} duration
 * @param {String} originalDurationType
 * @param {String} newDurationType
 * @returns duration in newType.
 */

export const convertDuration = (
  duration,
  originalDurationType,
  newDurationType,
) => {
  const conversionFactors = {
    SECOND: 1,
    MINUTE: 60,
    HOUR: 3600,
    DAY: 86400,
    WEEK: 604800,
    MONTH: 2629746,
    YEAR: 31556952,
  };

  const originalSeconds = duration * conversionFactors[originalDurationType];
  const newDuration = originalSeconds / conversionFactors[newDurationType];

  return newDuration;
};
/**
 *
 * @param {Number} originalCost
 * @param {String} originalDurationType
 * @param {String} newDurationType
 * @returns cost for newDurationType.
 */
export const convertDurationCost = (
  originalCost,
  originalDurationType,
  newDurationType,
) => {
  let conversionFactor = convertDuration(
    1,
    originalDurationType,
    newDurationType,
  );
  const newCost = originalCost / conversionFactor;
  return newCost;
};

export const setValueOfLastAddedMasterforProductGoal = (masterData) => {
  let length = masterData.length;
  let valueOfMaster = length > 0 ? masterData[length - 1].strategy_id : null;
  return valueOfMaster;
};



export const setCompetitorsList=(data)=>{
  const competitors = data.customers.map((customer) => {
    const keys = Object.keys(customer);
    const lastKey = keys[keys.length - 1];
    const competitorId = parseInt(lastKey.slice(11, 13));
    return competitorId;
  });
  const maxCompetitor = Math.max(...competitors);
  return maxCompetitor;
}

