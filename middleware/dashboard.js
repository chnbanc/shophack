export default async function({$auth, redirect, store}) {
    let user = $auth.state.user;
    if(user && user.status){
        
    } else {
        redirect ('/')
    }
}