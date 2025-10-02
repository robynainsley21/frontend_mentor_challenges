export default function Ext_Filter() {

    const buttons = [
        {
            id: 1,
            name: "All"
        },
        {
            id: 2,
            name: "Active"
        },
        {
            id: 3,
            name: "Inactive"
        }
    ]
    return (
        <>
        
       <div className="filter_buttons">
         {buttons.map((button) => {
            return (
                <button key={button.id}>{button.name}</button>
            )
        })}
       </div>
        
        
        </>
    )
}