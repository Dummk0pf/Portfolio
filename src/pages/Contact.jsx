import emailjs from '@emailjs/browser'
import { Canvas } from '@react-three/fiber';
import { Suspense, useRef, useState } from 'react'

import Fox from '../models/Fox'
import Loader from '../components/Loader';
import useAlert from '../hooks/useAlert';
import Alert from '../components/Alert';

const Contact = () => {

    const formRef = useRef(null);

    const [currentAnimation, setCurrentAnimation] = useState('idle');

    const [form, setForm] = useState({
        name : "",
        email : "",
        message : ""
    })

    const {alert, showAlert, hideAlert} = useAlert();

    const [isLoading, setIsLoading] = useState(false);

    const handleChange = (e) => {
        setForm({...form, [e.target.name] : e.target.value})
    }

    const handleFocus = () => {
        setCurrentAnimation('walk')
    }

    const handleBlur = () => {
        setCurrentAnimation('idle')
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsLoading(true);
        setCurrentAnimation('hit');

        emailjs.send(
            import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
            import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
            {
                from_name: form.name,
                to_name: "Sarika",
                from_email: form.email,
                to_email: "myothermailid001@gmail.com",
                message: form.message
            },
            import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
        ).then(() => {
            setIsLoading(false);
            showAlert({show : true, text : 'Thank you for your message😃', type : 'success'})
            setTimeout(() => {
                hideAlert();
                setForm({
                    name : "",
                    email : "",
                    message : ""
                });
                setCurrentAnimation('idle');
            }, [3000]);
            
        }).catch((error) => {
            setIsLoading(false);
            setCurrentAnimation('idle');
            console.log(error);
            
            showAlert({show : true, text : `I didn't receive your message`, type : 'danger'})
            
            setTimeout(() => {
                hideAlert();
            }, 5000)
        })
    }

    return (
        <section className='flex lg:flex-row flex-col max-container h-[100vh]'>
            {alert.show && <Alert { ...alert }/>}
            <div className="flex-1 min-w-[50%] flex flex-col">
                <h1 className='head-text'>Get in Touch</h1>
                <form action="" className='w-full flex flex-col gap-6 mt-14' onSubmit={handleSubmit}>
                    <div>
                        <label className='font-semibold text-black-500'>Name</label>
                        <input type="text"
                        name="name"
                        className='input' placeholder='Prames'
                        required
                        value={form.name}
                        onChange={handleChange}
                        onFocus={handleFocus}
                        onBlur={handleBlur}
                        />
                    </div>
                    <div>
                        <label className='font-semibold text-black-500'>Email</label>
                        <input type="email"
                        name="email"
                        className='input' placeholder='Prames@gmail.com'
                        required
                        value={form.email}
                        onChange={handleChange}
                        onFocus={handleFocus}
                        onBlur={handleBlur}
                        />
                    </div>
                    <div>
                        <label className='font-semibold text-black-500'>Your Message</label>
                        <textarea
                        className='textarea' placeholder='Let me know how I can help you!'
                        rows={4}
                        required
                        name='message'
                        value={form.message}
                        onChange={handleChange}
                        onFocus={handleFocus}
                        onBlur={handleBlur}
                        />
                    </div>
                    <button
                    className='btn'
                    type='submit'
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    disabled={isLoading}
                    >
                        {isLoading ? 'Sending' : 'Send Message'}
                    </button>
                </form>
            </div>
            <div className='lg:w-1/2 w-full md:h-[550px] h-[350px]'>
                <Canvas className='mt-10'
                camera={{
                    position:[0, 0 , 5],
                    fov:75,
                    near:0.1,
                    far:1000
                }}
                >
                    <Suspense fallback={<Loader/>} >
                        <Fox
                        position={[0.5, 0.35, 0]}
                        rotation={[12.6, -0.6, 0]}
                        scale={[0.5, 0.5, 0.5]}
                        currentAnimation={currentAnimation}
                        />
                    </Suspense>
                    <directionalLight intensity={2.5} position={[0, 0, 1]}/>
                    <ambientLight intensity={1}/>
                </Canvas>
            </div>
        </section>
    )
}

export default Contact