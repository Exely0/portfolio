function Contact() {

    const Contacts = [
        {name: "Instagram", link: ""},
        {name: "Twitter", link: ""},
        {name: "Linkedln", link: ""},
        {name: "Github", link: ""},  
    ]

    return (
      <div className=" w-full rounded-xl p-8 flex flex-col gap-8">
          <div className="flex justify-center items-center">
              <h1 className=" font-semibold text-4xl">
                  Contact
              </h1>
          </div>
          <div className=""></div>
          <div className=" grid p-8 border-b-4 border-l-4 border-t-2 border-r-2 border-black">
              <ul>
                {Contacts.map((contact, index) => (
                    <div key = {index}>
                    <li><a href={contact.link} className=" hover:text-[rgba(125,29,63,1)]">{contact.name}</a></li>
                    <div className={`${index < Contacts.length - 1 ? "border border-black" : ""} flex h-[1px] my-1 w-16`}></div>
                    </div>
                ))
                }
              </ul>
          </div>
        
      </div>
    );
  }
  
  export default Contact;