import React from 'react'
import {
    Button,
    Dialog,
    DialogHeader,
    DialogBody,
    DialogFooter,
} from "@material-tailwind/react";

function ServiceCard({ image, title, description }) {
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => setOpen(!open);
    return (
        <>
            <div onClick={handleOpen}
                className="service-card relative overflow-hidden h-[250px] w-[250px] md:h-[200px] md:w-[200px] rounded-2xl md:hover:shadow-card-glow transition-all duration-300 cursor-pointer"
                style={{ backgroundImage: `url(${image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
            >
                <div className="absolute inset-0 bg-black opacity-50"></div>
                <div className="absolute inset-0 flex flex-col justify-center md:justify-start md:mt-14 mx-8 md:mx-4 text-start text-white">
                    <h3 className="text-[26px] md:text-2xl font-cairo font-bold ">{title}</h3>
                    
                </div>
            </div>
            <Dialog
                className='bg-primary border border-[#ffffff25]'
                open={open}
                handler={handleOpen}
                animate={{
                    mount: { scale: 1, y: 0 },
                    unmount: { scale: 0.9, y: -100 },
                }}
            >
                <DialogHeader className='font-cairo font-bold text-white'>{title}</DialogHeader>
                <DialogBody className=' text-accent'>
                    {description}
                </DialogBody>
                <DialogFooter>
                    <Button onClick={handleOpen} className='bg-secondary text-white font-bold px-4 py-2 text-sm outline-none'>
                        Close
                    </Button>
                </DialogFooter>
            </Dialog>
        </>
    )
}

export default ServiceCard
