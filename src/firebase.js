import { initializeApp } from "firebase/app";
import { ref, onUnmounted } from "vue";
import {
  signInWithPopup,
  GoogleAuthProvider,
  getAuth,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import {
  collection,
  getFirestore,
  onSnapshot,
  addDoc,
  query,
  orderBy,
  limit,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA5d9_ltK2Sk-p1R6fZt0X8_hA2fFqHVng",
  authDomain: "chat-app-a98ca.firebaseapp.com",
  projectId: "chat-app-a98ca",
  storageBucket: "chat-app-a98ca.appspot.com",
  messagingSenderId: "653099959845",
  appId: "1:653099959845:web:305a6876f19ab84c4da1cc",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

// UseAuth Hook
export const useAuth = () => {
  const user = ref(null);
  const isLogin = ref(false);

  const unsubscribe = onAuthStateChanged(auth, (userData) => {
    if (userData !== null) {
      isLogin.value = true;
      user.value = {
        uid: userData.uid,
        displayName: userData.displayName,
        photoUrl: userData.photoURL,
      };
    } else {
      user.value = null;
      isLogin.value = false;
    }
  });
  onUnmounted(unsubscribe);

  const signIn = async () => {
    const provider = new GoogleAuthProvider();
    await signInWithPopup(auth, provider);
  };

  const logout = async () => {
    signOut(auth);
  };

  return { user, isLogin, signIn, logout };
};

// Firestore
const messagesCollection = collection(db, "messages");
const messagesQuery = query(
  messagesCollection,
  orderBy("createdAt", "desc"),
  limit(50)
);

// Use Chat Hook
export const useChat = () => {
  const messages = ref([]);

  const unsubscribe = onSnapshot(messagesQuery, (snapshot) => {
    messages.value = snapshot.docs
      .map((message) => ({
        id: message.id,
        ...message.data(),
      }))
      .reverse();
  });
  onUnmounted(unsubscribe);

  const { user, isLogin } = useAuth();
  const sendMessage = (text) => {
    if (!isLogin) return;

    const { uid, displayName, photoUrl } = user.value;

    addDoc(messagesCollection, {
      userId: uid,
      userName: displayName,
      photoUrl: photoUrl,
      text: text,
      createdAt: new Date().getTime(),
    });
  };

  return { messages, sendMessage };
};
