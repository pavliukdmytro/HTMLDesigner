export default function useCookies() {
  const set = (name: string, value: string, expDays?: number) => {
    try {
      if (expDays) {
        const date = new Date();
        date.setTime(date.getTime() + expDays * 24 * 60 * 60 * 1000);
        const expires = `expires=${date.toUTCString()}`;
        document.cookie = `${name} = ${value}; ${expires}; path=/`;
      } else {
        document.cookie = `${name} = ${value}; path=/`;
      }
    } catch (err) {
      console.error(err);
    }
  };
  // eslint-disable-next-line consistent-return
  const get = (cName: string): string | void => {
    try {
      const name = `${cName}=`;
      const cDecoded = decodeURIComponent(document.cookie); // to be careful
      const cArr = cDecoded.split('; ');
      let res;
      cArr.forEach((val) => {
        if (val.indexOf(name) === 0) res = val.substring(name.length);
      });
      return res;
    } catch (err) {
      console.error(err);
    }
  };

  return {
    set,
    get,
  };
}
