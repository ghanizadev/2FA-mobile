import axios from 'axios';
import qs from 'qs';
import {store, actions} from '../redux/store';
import jwt from 'jwt-decode';

const url = 'http://192.168.1.2:3333';

export default {
  async login(email: string, password: string) {
    return new Promise(async (res, rej) => {
      const config = {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        validateStatus: (status: number) => status >= 200 && status < 500,
      };

      const response = await axios.post(
        url + '/oauth/token',
        qs.stringify({email, password, grant_type: 'password'}),
        config,
      );

      if (response.status === 201) {
        store.dispatch(actions.setToken(response.data.access_token));
        store.dispatch(actions.setExpiresIn(response.data.expires_in));

        const payload: any = jwt(response.data.access_token);

        const userconfig = {
          headers: {
            Authorization: 'Bearer ' + response.data.access_token,
          },
          validateStatus: (status: number) => status >= 200 && status < 500,
        };

        const user = await axios.get(
          url + '/user/' + payload.email,
          userconfig,
        );

        if (user.status === 200) {
          store.dispatch(actions.setUser(user.data));
          res();
        } else {
          rej(user.data);
        }
      } else {
        rej(response.data);
      }
    });
  },
  async authorizeApp(code: string) {
    return new Promise(async (res, rej) => {
      const token = store.getState().accessToken;

      const config = {
        headers: {
          Authorization: 'Bearer ' + token,
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        validateStatus: (status: number) => status >= 200 && status < 500,
      };

      const response = await axios.post(
        url + '/authorize',
        qs.stringify({code}),
        config,
      );

      if (response.status === 204) {
        res();
      } else {
        rej(response.data);
      }
    });
  },
};
