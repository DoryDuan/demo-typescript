interface Result<T> {
  success: Boolean;
  errMsg?: string;
  data: T;
}

export const getResponseData = <T>(data: T, errMsg?: string): Result<T> => {
  if (errMsg) {
    return {
      success: false,
      errMsg,
      data,
    };
  } else {
    return {
      success: true,
      data,
    };
  }
};
