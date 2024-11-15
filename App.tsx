import { doc, getDoc } from 'firebase/firestore'
import React, { useEffect } from 'react'
import { View } from 'react-native'
import { db } from './firebase'
import { Main } from './src/screens/main'

function App(): React.JSX.Element {
  // ••••• reactotron •••••
  if (__DEV__) {
    import('./ReactotronConfig').then(() => null)
  }

  useEffect(() => {
    async function getAppVersion() {
      try {
        // Create a reference to the specific document
        const docRef = doc(db, 'remoteSettings', 'appVersion')

        // Get the document
        const docSnap = await getDoc(docRef)

        if (docSnap.exists()) {
          // Document exists, you can access its data
          console.log('Document data:', docSnap.data())
          return docSnap.data()
        } else {
          // Document does not exist
          console.log('No such document!')
          return null
        }
      } catch (error) {
        console.error('Error getting document:', error)
        return null
      }
    }

    // Call the function
    getAppVersion()
  }, [])

  return (
    <View style={{ flex: 1 }}>
      <Main />
    </View>
  )
}

export default App
