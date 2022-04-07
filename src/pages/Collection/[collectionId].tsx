import { useRouter } from "next/router";

const Collection = () => {
  const router = useRouter();
  const { collectionId } = router.query;
  return (
    <div>{collectionId}</div>
  );
};

export default Collection;