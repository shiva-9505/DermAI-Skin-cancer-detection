import PhoneImg from "../assets/phone.svg?react";

function ContactMethod({phone, name}) {
    return (
        <a href={`tel:${phone}`} target="_blank" className="flex flex-col items-center gap-2 group text-gray-600">
            <div className="flex gap-3 text-2xl items-center">
               <PhoneImg />
                <span>Phone: 9505492021</span>
                
            </div>
            <div className="flex gap-3 text-2xl items-center">Email: dermai.skin@gmail.com</div>
            <span className="text-gray-400 text-3xl transition group-hover:text-black text-center">
                {name}
            </span>
        </a>
    )
}

export default ContactMethod;