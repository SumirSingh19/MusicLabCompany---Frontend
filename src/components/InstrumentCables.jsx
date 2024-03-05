

const InstrumentCables = () => {
    return (
        <div className="flex flex-row items-center justify-evenly space-x-4">
            <div className="space-x-4 aspect-w-16 aspect-h-9">
                <div>
                <img className="object-cover object-center w-full h-full" width={200} height={200} src={"https://themusiccablecompany.com/wp-content/uploads/2022/01/RedCable-1-1-scaled-640x962.jpg"}/>
                </div>
                <div className="flex justify-center font-montserrat">
                <h4>CoreB Intrument Cable</h4>
                </div>
                
                
            </div>
            <div className="space-x-4 aspect-w-16 aspect-h-9">
                <div >
                <img className="object-cover object-center w-full h-full" width={300} height={300} src={"https://themusiccablecompany.com/wp-content/uploads/2021/12/CoreM-Dark-Purple-Nickel-1-1-640x962.jpeg"}/>
                </div>
                <div className="flex justify-center font-montserrat">
                <h4>CoreM Intrument Cable</h4>
                </div>
            </div>
            <div className="space-x-4 aspect-w-16 aspect-h-9">
                <div>
                <img className="object-cover object-center w-full h-full" width={300} height={300} src={"https://themusiccablecompany.com/wp-content/uploads/2023/11/Primo-Front-Page-Canva-1-640x962.png"} />
                </div>
                <div className="flex justify-center font-montserrat">
                <h4>Primo Intrument Cable</h4>
                </div>
                

            </div>
        </div>
    )
};

export default InstrumentCables;