export default function tabsList() {
    const tabs = [
        ,"Profile"
        ,"New York"
        ,"Relaxing"
        ,"Person"
        ,"Fashion"
    ];

    return (
        <ul className="flex justify-between w-[443px] mb-[56px]">
            {tabs.map((tab) => (
                <li className="font-['Poppins'] text-[16px] font-[500] h-[44px] p-[10px] bg-[#fff] rounded-[8px] ">{tab}</li>
            ))}
        </ul>
    );
}
