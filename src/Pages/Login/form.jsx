import "./form.css"

export default function Form() {

    return(
        
           
        <>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"></link>
        
        
            
            <div class="content">
            <div class="text">Login</div>
            <form action="#">
                <div class="field">
                <span class="fa fa-user"></span>
                <input type="text" placeholder="Email Id" required/>
            
                </div>
                <div class="field">
                <span class="fa fa-lock"></span>
                <input type="password" placeholder="Password"/>
                
                </div>
                
                <button>Log in</button>
                <div class="or">Or</div>
                <div class="icon-button"> 
                    
                <span class="facebook"><i class="fa fa-facebook"></i>  Facebook</span>

                <span><i class="fa fa-google"></i>  Google</span>


                </div>
            </form>
            </div>
        
                        


        
        </>
        
    

    )
}

