export const name_validation = {
  name: "name",
  label: "name",
  type: "text",
  id: "name",
  placeholder: "write your name ...",
  validation: {
    required: {
      value: true,
      message: "required",
    },
    maxLength: {
      value: 30,
      message: "30 characters max",
    },
  },
};

export const category_validation = {
  name: "category",
  label: "category",
  id: "category",
  validation: {
    required: {
      value: true,
      message: "required",
    },
    maxLength: {
      value: 10,
      message: "10 characters max",
    },
  },
};

export const tag_validation = {
  name: "tag",
  label: "tag",
  id: "tag",
  validation: {
    required: {
      value: true,
      message: "required",
    },
  },
};

export const desc_validation = {
  name: "description",
  label: "description",
  id: "description",
  validation: {
    required: {
      value: true,
      message: "required",
    },
    maxLength: {
      value: 100,
      message: "100 characters max",
    },
  },
};

export const link_validation = {
  name: "link",
  label: "link",
  type: "text",
  id: "link",

  validation: {
    required: {
      value: true,
      message: "required",
    },
    pattern: {
      value:
        /(https:\/\/www\.|http:\/\/www\.|https:\/\/|http:\/\/)?[a-zA-Z0-9]{2,}(\.[a-zA-Z0-9]{2,})(\.[a-zA-Z0-9]{2,})?/,
      message: "Not valid",
    },
  },
};

export const imgUrl_validation = {
  name: "imgUrl",
  label: "imgUrl",
  type: "text",
  id: "imgUrl",

  validation: {
    required: {
      value: true,
      message: "required",
    },
    pattern: {
      value:
        /(https:\/\/www\.|http:\/\/www\.|https:\/\/|http:\/\/)?[a-zA-Z0-9]{2,}(\.[a-zA-Z0-9]{2,})(\.[a-zA-Z0-9]{2,})?/,
      message: "Not valid",
    },
  },
};

// Login form validations
export const email_validation = {
  name: "email",
  label: "email",
  type: "email",
  id: "email",
  validation: {
    required: {
      value: true,
      message: "required",
    },
    pattern: {
      value: /[A-Za-z0-9\._%+\-]+@[A-Za-z0-9\.\-]+\.[A-Za-z]{2,}/,
      message: "Not valid",
    },
  },
};

export const phone_validation = {
  name: "phone",
  label: "phone",
  type: "number",
  id: "phone",
  validation: {
    required: {
      value: true,
      message: "required",
    },
    pattern: {
      value: /^\d+$/,
      message: "Not valid",
    },
    minLength: {
      value: 10,
      message: "10 digits min",
    },
    maxLength: {
      value: 10,
      message: "10 digits max",
    },
  },
};

export const password_validation = {
  name: "password",
  label: "password",
  type: "password",
  id: "password",

  validation: {
    required: {
      value: true,
      message: "required",
    },
    minLength: {
      value: 8,
      message: "8 characters min",
    },
    maxLength: {
      value: 15,
      message: "15 characters max",
    },
    pattern: {
      value:
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
      message: "Should contain number, symbol & character.",
    },
  },
};

export const repeat_pass_validation = {
  name: "repeat password",
  label: "repeat password",
  type: "password",
  id: "repeatPassword",

  validation: {},
};
