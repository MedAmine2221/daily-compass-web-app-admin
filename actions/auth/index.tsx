import { auth } from "@/config/firebase";
import { setUser } from "@/redux/user/userReducer";
import { saveToken } from "@/utils/cookies-management";
import { getUsers } from "@/utils/functions";
import { signInWithEmailAndPassword } from "firebase/auth";

export const signIn = async (data: any, dispatch: any, router: any) => {
  try{
    const { email, password } = data;
    const user = await signInWithEmailAndPassword(auth, email, password);
    const uid = user.user.uid;
    const userInfo = await getUsers({id: uid})
    await saveToken({token: user?.user?.accessToken})
    if(user.user.emailVerified){
      if(userInfo.data()?.validatedAccount){
        if (user.user.accessToken) {     
          if (userInfo.exists()) {
            dispatch(setUser(userInfo.data()))
          }
          router.replace("/dashboard")        
        }
      }else{
        alert("Your account has exceeded the free trial period. Please upgrade to a paid plan")
      }
    }else{
      alert(
        "A verification email has been sent. Please click the link to activate your account."
      );  
    }
  }catch(error: any){
    console.error("Error signing in:", error);
  }
} 