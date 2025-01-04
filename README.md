# Skin Cancer Detection using Deep CNN

![Home Page Screenshot](screenshots/ss1.png)
![Take a test Screenshot](screenshots/ss2.png)


Skin Cancer Detection project is a sophisticated web application developed to detect skin cancer utilizing advanced deep learning techniques.

## Features

- User account creation and authentication system.
- Test conducting functionality for users.
- Ability to share test results with doctors.
- Viewing test history.
- Integration of React and Tailwind CSS for frontend development.
- Utilization of Express for backend implementation.
- Connection to MongoDB for data storage.
- Training of predictive model using TensorFlow and Keras for skin cancer detection.

## Installation

1. Install Node.js, Python & Git on your local machine.

2. Clone the repository to your local machine:
```sh
git clone https://github.com/karantolani/skin-cancer-detection.git
```
3. The steps to run server is mentioned in the respective folder.

## Visual Aid

![High Level Design](screenshots/diagram.png)
![Test Results 1](screenshots/ss4.png)
![Test Results 2](screenshots/ss3.png)






EmptyState imgSrc={notFoundImg} heading="404! Page Not Found." body="Look's like you have lost your way."


ContactMethod
<a href={`tel:${phone}`} target="_blank" className="flex flex-col items-center gap-2 group text-gray-600">
            <div className="flex gap-3 text-2xl items-center">
               <PhoneImg />
                <span>Phone</span>
            </div>
            <span className="text-gray-400 text-3xl transition group-hover:text-black text-center">
                {name}
            </span>
        </a>