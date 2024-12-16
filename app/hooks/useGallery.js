"use client";

import { useEffect, useState } from "react";




export function useGallery() {
    const [open, setOpen] = useState(false);
    

    return {
        open,
        setOpen

    }

}