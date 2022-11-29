module.exports = ({ env }) => ({
  host: env('HOST', 'https://guitarla-server.herokuapp.com/'),
  port: env.int('PORT', 1337),
  app: {
    keys: env.array('EkuDPMrq9aDRHGHyb3O9IQ==,WeHSiiRSQMGHAa3tx9i0xg==,SiGVVPTCGE9T7rB7dqJ11Q==,PEpezAMAfvLk1LePcSIj5Q=='),
  },
});
