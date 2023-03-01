import { addDoc, collection } from "@firebase/firestore"
import { firebase } from "./firebase"


const handleSubmit = (testdata) => {
    const ref = collection(firebase, "test_data") // Firebase creates this automatically
 
    let data = {
        testData: testdata
    }
    
    try {
        addDoc(ref, data)
    } catch(err) {
        console.log(err)
    }
}
 
export default handleSubmit