import Header from "@/components/pages/dashboard/layout/Header";

const Layout = ({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>)=>{
    return(
        <>
            <Header/>
            {children}
        </>
    )
}

export default Layout