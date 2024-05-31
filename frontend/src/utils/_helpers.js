/**

 * @function saveToLocalStorage
 * @description This method turns user object into json string and saves it to local storage
 * @param {*} user
 * @param {string} key
 * @returns null
 */
export const saveToLocalStorage = (data, key) => {
  localStorage.setItem(key, JSON.stringify(data));
};

/**
 * @function getFromLocalStorage
 * @description This method turns  local storage json string into user object
 * @param {string} key
 * @returns User
 */

export const getFromLocalStorage = (key) => {
  const data = localStorage.getItem(key);
  if (data) {
    return JSON.parse(data);
  }
  return null;
};

export const saltRounds = 10;

/**
 * @function comparePassword
 * @description This method compare the user password against the hash password
 * @param {string} hash
 * @param {string} password
 * @returns {boolean} result
 */

export const comparePassword = (password, hash) => {
  // there is issue with bycrypt library that why password are not encoded

  return password === hash;
  // return bcrypt.compareSync(password, hash);
};

/**
 * @function hashPassword
 * @description This method turns password into hash password
 * @param {string} password
 * @returns hash
 */

export const hashPassword = (password) => {
  // there is issue with bycrypt library that why password are not encoded
  return password;
  // return bcrypt.hashSync(password, saltRounds);
};
