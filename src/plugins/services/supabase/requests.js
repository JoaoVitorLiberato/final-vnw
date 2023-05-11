import supabase from "./supabase";


const supabaseRequests = () => ({
  login: async (email, password) => {
    const { data, error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password
    })

    if(error) throw error

    return data
  },
  
  signup: async (email, password, phone) => {
    const { data, error } = await supabase.auth.signUp({
      email: email,
      password: password,
      phone: phone
    })

    if(error) throw error

    return data
  },

  signout: async () => {
    const { error } = await supabase.auth.signOut()
    if(error) throw error
    return;
  }
})

export {
  supabaseRequests
}