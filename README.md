# lab-manager

Run the following command in terminal.
```bash
mysql -u root -p
```

Enter 1234 as the password.

Create the database.
```mysql
mysql> CREATE DATABASE lab_manager_db;
```

In a new terminal window, cd into the root of the project, run the following command:
```bash
npm run seed
```

Once the databse is seeded, start the app:
```bash
npm run start
```
