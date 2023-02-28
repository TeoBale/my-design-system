import supabase from "../Supabase";

const SignUp = async (email, password) => {
    const { data, error } = await supabase.auth.signUp({
        email: email,
        password: password,
    })
}

const SignIn = async (email, password) => {
    const { data, error } = await supabase.auth.signInWithPassword({
        email: email,
        password: password,
    })
}

const SignOut = async () => {
    const { error } = await supabase.auth.signOut()
}