// 'use client';
// import React from 'react';
// import { Form } from '@heroui/form';
// import { Input } from '@heroui/input';
// import { Button } from '@heroui/button';

// export default function FormUI() {
//   const [action, setAction] = React.useState(null);

//   return (
//     <Form
//       className="w-full max-w-xs flex flex-col gap-4"
//       validationBehavior="native"
//       // onReset={() => setAction('reset')}
//       // onSubmit={(e) => {
//       //   e.preventDefault();
//       //   let data = Object.fromEntries(new FormData(e.currentTarget));

//       //   setAction(`submit ${JSON.stringify(data)}`);
//       // }}
//     >
//       <Input
//         isRequired
//         errorMessage="Please enter a valid username"
//         label="Username"
//         labelPlacement="outside"
//         name="username"
//         placeholder="Enter your username"
//         type="text"
//       />

//       <Input
//         isRequired
//         errorMessage="Please enter a valid email"
//         label="Email"
//         labelPlacement="outside"
//         name="email"
//         placeholder="Enter your email"
//         type="email"
//       />
//       <div className="flex gap-2">
//         <Button color="primary" type="submit">
//           Submit
//         </Button>
//         <Button type="reset" variant="flat">
//           Reset
//         </Button>
//       </div>
//       {action && (
//         <div className="text-small text-default-500">
//           Action: <code>{action}</code>
//         </div>
//       )}
//     </Form>
//   );
// }
