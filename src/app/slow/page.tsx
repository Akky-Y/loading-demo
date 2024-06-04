export default async function Page() {
  await new Promise((resolve) => setTimeout(resolve, 5000));
  return (
    <div>
      <p>重いページです</p>
    </div>
  );
}
