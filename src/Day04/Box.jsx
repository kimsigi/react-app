export default function Box({title = "Unknown",children}) {
    return (
        <>
            
            <div style={{ border: "2px solid gray", padding: "10px", margin: "10px" }}>
                <h3 style={{backgroundColor: 'red'}}>{title}</h3> 
                {children}
            </div>
        </>
    );
}