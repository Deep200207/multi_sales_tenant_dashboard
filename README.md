# Folder Structure
src/
├── data/ #Mock tenant-specific data
├── context/ #Global authentication and tenant state
├── components/    Reusable components (Protected routes)
├── pages/         Route-level components (Dashboard, Leads, etc.)
├── App.jsx        Routing and lazy loading
└── main.jsx       Application entry point

# Multi-Tenant Handling
The application supports multiple tenants (Organization A and Organization B).
Each user belongs to exactly one tenant.
All data (leads and call logs) is isolated per tenant.
Switching the tenant updates the visible data without affecting other tenants.
Tenant-specific data is managed using keyed mock datasets.

# Role-Based Access Control
The application supports two roles:

## Admin
Full access within the tenant
Can view and edit lead status
Can access the Settings page

## Agent
View-only access
Can view leads and call logs
Cannot edit data or access admin settings
Role checks are enforced at the UI and route level

# Core Functional Modules
## Leads Module
Displays leads in a column-based table layout
Fields include name, phone number, and status
Supports filtering by lead status
Edit actions are available only to Admin users
## Call Logs Module
Displays call logs in a tabular format
Shows lead name, time, duration, and outcome
Data is tenant-specific and read-only

#Frontend Optimization
Route-level lazy loading is implemented using React.lazy and Suspense.
Pages such as Dashboard, Leads, Call Logs, and Settings are loaded only when accessed.
Context API is used to avoid prop drilling and reduce unnecessary re-renders.
These optimizations improve performance and scalability.

# How to Run the Project
npm run dev
