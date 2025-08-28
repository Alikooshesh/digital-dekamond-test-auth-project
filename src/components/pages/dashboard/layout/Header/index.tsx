'use client'

import Button from "@/components/general/Button"
import { useUser } from "@/hooks/useUser"

const Header = ()=>{

    const {logout} = useUser()

    return(
        <header className="w-full p-8 md:px-16 lg:py-24 bg-blue-300 flex items-center justify-end">
              <Button variant="destructive" size="sm" onClick={logout}>
                Logout
              </Button>
            </header>
    )
}

export default Header