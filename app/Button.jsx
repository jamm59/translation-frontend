export default function Button({ content, clickEvent,FontIcon }) {
    return (<>
             <button 
                onClick={clickEvent}
                className="bg-gray-900 rounded-md 
                text-left text-white font-normal
                px-5 py-2 m-2 shadow-lg transition-colors
                ease-in md:text-lg">
                    {FontIcon}
                    { content }
            </button>
        </>);
}