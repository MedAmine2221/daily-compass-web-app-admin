import { auth } from "@/Firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

export const signIn = async (data: any) => {
  try{
    const { email, password } = data;
    const user = await signInWithEmailAndPassword(auth, email, password);
    // const userInfo = await getUsers({id: user.user.uid})
    // if(user.user.emailVerified){
    //   if(userInfo.data()?.validatedAccount){
    //     if (user) {
    //       await saveToken(user?.user?.accessToken)
          
    //       if (!user.user) return null;
    //       const uid = user.user.uid;
    //       const userSnap = await getUsers({id: uid})
    //       const messages = await getItems({
    //         collectionName: "chat",
    //         filters: [{
    //           field: "userId",
    //           operator: '==',
    //           value: uid,
    //         }]
    //       })
    //       const task = await getItems({
    //         collectionName: "tasks",
    //         filters: [{
    //           field: "userId",
    //           operator: '==',
    //           value: uid,
    //         }]
    //       })         
    //       if (userSnap.exists()) {
    //         dispatch(setUser(userSnap.data()))
    //         messages?.docs.map(doc => dispatch(setChat(doc.data())))
    //         task?.docs.map(doc => {            
    //             switch(doc.data().status){
    //                 case STATUS.TODO : 
    //                   dispatch(setTask(doc.data()));
    //                   break;
    //                 case STATUS.InProgress : 
    //                   dispatch(setTaskInProgress(doc.data())); 
    //                   break;
    //                 case STATUS.DONE : 
    //                   dispatch(setTaskDone(doc.data()));
    //                   break;
    //                 default: console.warn("Unknown status:", doc.data().status);
    //             } 
                
    //           }
    //         )
    //         const taskDocs = task?.docs.map(doc => doc.data());
    //         if(taskDocs){
    //           const calendarReadyData = transformTasksForCalendar(taskDocs);            
    //           dispatch(setCalendar(calendarReadyData));
    //         }     
    //       } else {
    //         console.log("No such user document!");
    //         return null;
    //       }
    //       router.replace("/(tabs)/welcom")        
    //     }
    //   }else{
    //     Alert.alert(t("signInAlert"), t("signInAlertUnverified"))
    //   }
    // }else{
    //   Alert.alert(
    //     "Confirm your email",
    //     "A verification email has been sent. Please click the link to activate your account."
    //   );  
    // }
  }catch(error: any){
    console.error("Error signing in:", error);
  }
} 