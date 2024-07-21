interface Picture {
  owner: string;
  hobby: string;
  free: string;
  price: number;
}

interface MoreAdditionalInfoProps {
  picture: Picture;
}
const MoreAditionalInfo: React.FC<MoreAdditionalInfoProps> = ({ picture }) => {
  return (
    <>
      <div className="text-[12px] text-[#4C4C4c] align-left list-disc">
        <ul className="flex gap-2">
          <li>Stay with {picture.owner}</li>
          <li>{picture.hobby}</li>
        </ul>
      </div>
      <div className="text-[12px] text-[#4c4c4c]">{picture.free}</div>
      <div className="text-[12px]">
        <span className="mt-[5px] font-black">$</span>
        <span className="font-black">{picture.price}</span>
        <span className="text-[#4C4C4C] ml-1">night</span>
      </div>
    </>
  );
};

export default MoreAditionalInfo;
