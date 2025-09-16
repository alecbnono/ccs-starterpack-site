function AboutCard({ icon: Icon, heading, body }) {
    return (
        <div className="flex flex-col gap-5 text-center w-75 items-center p-5 rounded-xl bg-slate-800">
            <Icon className="h-20 w-20" />
            <div className="flex flex-col gap-2">
                <h3 className="text-2xl font-medium">{heading}</h3>
                <p>{body}</p>
            </div>
        </div>
    );
}

export default AboutCard;
