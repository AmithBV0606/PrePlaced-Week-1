import useInput from "../context/InputContext";

function Body() {
    const {name, companyName, effectiveDate, lastDate} = useInput()

    return(
        <div className="flex flex-col items-start justify-start gap-5 text-lg">
            <span>Dear Manager,</span>

            <p>
                Please accept this email as my formal resignation from {companyName}. I have taken this decision as I have got a different/better work opportunity and would like to pursue my career in the same.
            </p>

            <p>
                Request you to consider my letter of resignation effective from {effectiveDate}. I understand that as per the policy I am required to serve a notice period of 60 days and my last working day accordingly shall be {lastDate}.
            </p>

            <p>
                I would request you to consider releasing me early, if it's possible. I am grateful to {companyName} and looking forward to your support.
            </p>

            <div className="flex flex-col">
                <span>Thanks and Regards,</span>
                <span>{name}</span>
            </div>
        </div>
    );
}

export default Body;