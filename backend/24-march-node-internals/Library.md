# Book Management System

### Tables
 - Users
   - ID
   - Name
   - Phone Number
   - Address
   - Roles: ['Admin' or 'User']
 - Books
   - ID
   - Name
   - ISBN_Number
   - Price
   - Author
 - Author
   - ID
   - Name
   - Links
   - List[Books]
 - BookRecords
   - ID
   - Book Name
   - Issued Time
   - Return Time
   - Is Returned
   - User Id
 - Payment