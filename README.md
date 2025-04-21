# Care Pulse

**Care Pulse** is a modern healthcare appointment management system designed to streamline the process of scheduling and managing appointments between patients and doctors. Built with a focus on user experience and administrative efficiency, it offers a robust platform for both patients and healthcare providers.

## 🏥 Introduction

Care Pulse facilitates seamless interactions between patients and medical professionals by providing:

- Easy patient registration and profile management
- Convenient appointment booking with preferred doctors
- Administrative tools for managing, confirming, and canceling appointments
- SMS notifications to keep patients informed about their appointments

The application is built using **Next.js**, ensuring a fast and responsive user interface.

## ⚙️ Tech Stack

- **Next.js**
- **Appwrite**
- **TypeScript**
- **Tailwind CSS**
- **ShadCN**

## 🚀 Features

### For Patients
- **Register as a Patient**: Create a personal profile to manage appointments.
- **Book Appointments**: Schedule appointments with doctors at your convenience.
- **View Appointment History**: Keep track of past and upcoming appointments.

### For Administrators
- **Manage Appointments**: View all scheduled appointments in a centralized dashboard.
- **Confirm/Schedule Appointments**: Approve and set appointment times to ensure proper scheduling.
- **Cancel Appointments**: Handle cancellations efficiently to free up slots.
- **Send SMS Notifications**: Automatically notify patients about appointment confirmations or changes.

## 📦 Installation

1. **Clone the repository**:
```bash
git clone https://github.com/aryan-prog/care-pulse.git
cd care-pulse
```

2. **Install dependencies**:
```bash
npm install
# or
yarn install
```

3. **Set up environment variables**:
Create a `.env.local` file in the root directory and add the necessary environment variables as per your Appwrite and Twilio configurations.

4. **Run the development server**:
```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 🧪 Testing

To run tests, use the following command:
```bash
npm run test
# or
yarn test
```
Ensure that you have set up the testing environment as per the project's requirements.

## 📄 License

This project is licensed under the [MIT License](LICENSE).

## 🙌 Acknowledgements

Special thanks to all contributors and the open-source community for their invaluable support and resources.
