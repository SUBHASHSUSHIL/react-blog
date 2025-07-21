import College from "./College";

function NestedLoop() {
    const collegeData = [
        {
            name: "IET Alwar",
            city: "Alwar",
            website: "www.iet.com",
            student: [
                {
                    name: "Sushil Thakur",
                    age: '20',
                    email: "sushilthakur9792@gmail.com"
                },
                {
                    name: "Swagat Thakur",
                    age: '25',
                    email: "swagatthakur9792@gmail.com"
                },
                {
                    name: "Manish Pathak",
                    age: '30',
                    email: "manish123@gmail.com"
                }
            ]
        },
        {
            name: "Jai Prakash Narayan",
            city: "chhapra",
            website: "www.jpv.in",
            student: [
                {
                    name: "Sushil Thakur",
                    age: '20',
                    email: "sushilthakur9792@gmail.com"
                },
                {
                    name: "Swagat Thakur",
                    age: '25',
                    email: "swagatthakur9792@gmail.com"
                },
                {
                    name: "Manish Pathak",
                    age: '30',
                    email: "manish123@gmail.com"
                }
            ]
        },
        {
            name: "mangalayatan university",
            city: "Aligarh",
            website: "www.magalaytan.nic.in",
            student: [
                {
                    name: "Sushil Thakur",
                    age: '20',
                    email: "sushilthakur9792@gmail.com"
                },
                {
                    name: "Swagat Thakur",
                    age: '25',
                    email: "swagatthakur9792@gmail.com"
                },
                {
                    name: "Manish Pathak",
                    age: '30',
                    email: "manish123@gmail.com"
                }
            ]
        }
    ]

    return (
        <div>
            <h1>Nested Looping in react</h1>
            {
                collegeData.map((college, index) => (
                    <div key={index}>
                        <College college={college} />
                    </div>
                ))
            }
        </div>
    )
}

export default NestedLoop;