//dss-auth-client.js defines the dssAuthClient object on windows
const dac = window.dssAuthClient

//check if user signed in
dac &&
  dac.checkLogin(
    () => {
      // user signed in.
      function safariFix() {
        if (navigator.userAgent.search('Safari') >= 0 && navigator.userAgent.search('Chrome') < 0) {
          document
            .requestStorageAccess()
            .then(
              () => {
                // Now we have first-party storage access!
                console.log('Got cookie access for Safari workaround')
                // Let's access some items from the first-party cookie jar
                // set cookie for NT and Token
                Cookies.set('graphviz_NT', dac.getNT(), { Secure: true, SameSite: 'None' })
                Cookies.set('graphviz_TOKEN', dac.getToken(), {
                  Secure: true,
                  SameSite: 'None',
                }) // drop a test cookie
              },
              () => {
                console.log('access denied')
              },
            )
            .catch(error => {
              // error obtaining storage access.
              console.log('Could not get access for Safari workaround: ' + error)
            })
        } else {
          console.log('login successful:', dac.getNT(), dac.getToken())
          Cookies.set('graphviz_NT', dac.getNT(), { Secure: true, SameSite: 'None' })
          Cookies.set('graphviz_TOKEN', dac.getToken(), { Secure: true, SameSite: 'None' })
        }
      }
      safariFix()
    },
    e => {
      //user is not signed in
      console.log('login check failed, redirecting login page')
      dac && dac.redirectToLogin()
    },
  )
