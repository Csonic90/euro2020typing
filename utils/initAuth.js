import { init } from 'next-firebase-auth'

const TWELVE_DAYS_IN_MS = 12 * 60 * 60 * 24 * 1000
const FIREBASE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\nMIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQCm6grinirIJmnr\n3bkAcNOmxIPoYTimF3KvFXMVHCe5XhtnmF7fhhoTnswHXOhBRy7rDMJy+AU3WGwq\nIdwlOFiYnMxBGkMUyUccXV8qmUtEP0NJm4dUtic4TgLsctt3eC/9XpSjMzVsbXAl\n9ExF8geZ0sni50n+x76DGiia2+7IX/cL6nurn9S9CxjF6Pzg9tU42Y824cvwGMD1\n8tEH0OxOZVc68cYT7n+UB0kmgTqI8HOu7fxBf+CDjERsB5EB8skaOoZ5aDvZQkF5\nInR3/NEVURKvypUblVfl/gOZZGpE4/EMpE12Q0VQyS2HSSj0W1TUDLpQmilBg7DR\nK2Iql/jLAgMBAAECggEAN4rJ9H8NXWzq8kHlve/NfkEGY912LE7BKuHIWc30qgpW\ntDJP37GQG9dLrWeNIau+QRkN25QMqE4UMDD0QK5vTNlgXomOqOwRba7kbBh2o08p\n5OSMM/QpOOM8tdHClg64aWd/ro7ryBjiqL6SYvQW82jhJVAxn0Z4bsfVmzJ0UtiS\nalCcrRIc4ZhGMxP1y/PIJ0dNWTjyg3+6UtWFfXQm9Ro9KYgWYY1aOSYeGf/Cq6uU\njsvXHqKbh1g2BDNLB0SYk5AYf69CKBQWhABbEPNprYfFPvfW4CgG113u/Ofns2je\nZOKBA04qrWEwDtCHCTlTRZA+f23F3AZQVPVpg3X8AQKBgQDZwtve1YvXlJlKt9Qg\nWDoVyX6bVcWHfoJTm0i8LIi5ARM4IgwxKOMGtY3G3yiXZ5OW57q0rE0+wCN0QJ9s\njHBJ6WN/cpMNlBOK5iSbUsHfMCyiB1UIsQmmC9bpBrlIW3ru6AQivr0a1/BgLGLl\nccsfMEjT/KrH0ReSTtDVai9eIQKBgQDEOW6x5j6x/G8Ve0Ynecl4rziG79/WzEdh\nTbTgm39eNFOY8uU1BCtDc5m6n6Wu1DBYnkAreXlSMr5NfP/pK+NqDx5CAUt8gWZT\nHzaUw2S0R1sQOg39lBEnP1ULm5pcwTW2Si3nCHwMGOs9G8jlHAJCDIcvlPcE6o0H\n1p4u7L2BawKBgE+2SrH5TaVumeaGADqO0URka9oEvbfpkV91elyXmLzQLe7gV8Iv\nC1vLXcisq7kwixA0Z133rJcJ0nCdrz4W8ou7yVY/5KCV0cmIkWHiG2HNyqjNMk1q\nMPP9ZYALnAtmoUuO1uS5GZQX87/gv5rp2sbh7+bZmNJoMc621y8oHYrBAoGAVlKp\nxutyg1x5BetAVpd2MXhsFriqMVWWxVCpFPJzWt8MM8oPWX5nBfpyE66t9bZ1OlcM\nBdQfsjCOlYo7Drn3Bq518jWdnr1SZZjiqxk2UTTe88mGZBriXPC4mi2u/8Ujuvjx\nLqUF5VCFFFIH0/q5Z5MZWa5f6TLCLkOVPTF6wNcCgYBQtpkqulkQf4ibnm7NFZho\nPM3nUyjTegUF700wBSjwfPTimys7lkPSP89aZoN4HVYZW7dZwLu3NOuO0RfFQp2G\nsBA6i5Q778CJLtsSLO/0ZUKKX3DPoaJ0X0nh1hHFXU2oe4W2wrNs3TUJi7ud4h0J\nFDH6gtSra1D2hgursjKb2g==\n-----END PRIVATE KEY-----\n"

const initAuth = () => {
  init({
    debug: false,
    authPageURL: '/auth',
    appPageURL: '/',
    loginAPIEndpoint: '/api/login',
    logoutAPIEndpoint: '/api/logout',
    firebaseAdminInitConfig: {
      credential: {
        projectId: "euro2020wakro",
        clientEmail: "firebase-adminsdk-m6csz@euro2020wakro.iam.gserviceaccount.com",
        // Using JSON to handle newline problems when storing the
        // key as a secret in Vercel. See:
        // https://github.com/vercel/vercel/issues/749#issuecomment-707515089
        privateKey: FIREBASE_PRIVATE_KEY
          ? JSON.parse(FIREBASE_PRIVATE_KEY)
          : undefined,
      },
      databaseURL:  "https://euro2020wakro.firebaseio.com", 
    },
    firebaseClientInitConfig: {
      apiKey:  "-----BEGIN PRIVATE KEY-----\nMIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQCm6grinirIJmnr\n3bkAcNOmxIPoYTimF3KvFXMVHCe5XhtnmF7fhhoTnswHXOhBRy7rDMJy+AU3WGwq\nIdwlOFiYnMxBGkMUyUccXV8qmUtEP0NJm4dUtic4TgLsctt3eC/9XpSjMzVsbXAl\n9ExF8geZ0sni50n+x76DGiia2+7IX/cL6nurn9S9CxjF6Pzg9tU42Y824cvwGMD1\n8tEH0OxOZVc68cYT7n+UB0kmgTqI8HOu7fxBf+CDjERsB5EB8skaOoZ5aDvZQkF5\nInR3/NEVURKvypUblVfl/gOZZGpE4/EMpE12Q0VQyS2HSSj0W1TUDLpQmilBg7DR\nK2Iql/jLAgMBAAECggEAN4rJ9H8NXWzq8kHlve/NfkEGY912LE7BKuHIWc30qgpW\ntDJP37GQG9dLrWeNIau+QRkN25QMqE4UMDD0QK5vTNlgXomOqOwRba7kbBh2o08p\n5OSMM/QpOOM8tdHClg64aWd/ro7ryBjiqL6SYvQW82jhJVAxn0Z4bsfVmzJ0UtiS\nalCcrRIc4ZhGMxP1y/PIJ0dNWTjyg3+6UtWFfXQm9Ro9KYgWYY1aOSYeGf/Cq6uU\njsvXHqKbh1g2BDNLB0SYk5AYf69CKBQWhABbEPNprYfFPvfW4CgG113u/Ofns2je\nZOKBA04qrWEwDtCHCTlTRZA+f23F3AZQVPVpg3X8AQKBgQDZwtve1YvXlJlKt9Qg\nWDoVyX6bVcWHfoJTm0i8LIi5ARM4IgwxKOMGtY3G3yiXZ5OW57q0rE0+wCN0QJ9s\njHBJ6WN/cpMNlBOK5iSbUsHfMCyiB1UIsQmmC9bpBrlIW3ru6AQivr0a1/BgLGLl\nccsfMEjT/KrH0ReSTtDVai9eIQKBgQDEOW6x5j6x/G8Ve0Ynecl4rziG79/WzEdh\nTbTgm39eNFOY8uU1BCtDc5m6n6Wu1DBYnkAreXlSMr5NfP/pK+NqDx5CAUt8gWZT\nHzaUw2S0R1sQOg39lBEnP1ULm5pcwTW2Si3nCHwMGOs9G8jlHAJCDIcvlPcE6o0H\n1p4u7L2BawKBgE+2SrH5TaVumeaGADqO0URka9oEvbfpkV91elyXmLzQLe7gV8Iv\nC1vLXcisq7kwixA0Z133rJcJ0nCdrz4W8ou7yVY/5KCV0cmIkWHiG2HNyqjNMk1q\nMPP9ZYALnAtmoUuO1uS5GZQX87/gv5rp2sbh7+bZmNJoMc621y8oHYrBAoGAVlKp\nxutyg1x5BetAVpd2MXhsFriqMVWWxVCpFPJzWt8MM8oPWX5nBfpyE66t9bZ1OlcM\nBdQfsjCOlYo7Drn3Bq518jWdnr1SZZjiqxk2UTTe88mGZBriXPC4mi2u/8Ujuvjx\nLqUF5VCFFFIH0/q5Z5MZWa5f6TLCLkOVPTF6wNcCgYBQtpkqulkQf4ibnm7NFZho\nPM3nUyjTegUF700wBSjwfPTimys7lkPSP89aZoN4HVYZW7dZwLu3NOuO0RfFQp2G\nsBA6i5Q778CJLtsSLO/0ZUKKX3DPoaJ0X0nh1hHFXU2oe4W2wrNs3TUJi7ud4h0J\nFDH6gtSra1D2hgursjKb2g==\n-----END PRIVATE KEY-----\n" ,
      authDomain:  "euro2020wakro.firebaseapp.com",
      databaseURL:  "https://euro2020wakro.firebaseio.com",
      projectId: "euro2020wakro",
    },
    cookies: {
      name: 'ExampleApp',
      keys: [
        "someSecretValue",
        "anotherSecretValue",
      ],
      httpOnly: true,
      maxAge: TWELVE_DAYS_IN_MS,
      overwrite: true,
      path: '/',
      sameSite: 'strict',
      secure: true,
      signed: true,
    },
  })
}

export default initAuth
