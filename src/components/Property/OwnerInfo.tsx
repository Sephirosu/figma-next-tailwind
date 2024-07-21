interface Picture {
    owner: string;
    hobby: string;

  }
  
  interface OwnerInfoProps {
    picture: Picture;
  }


const OwnerInfo:React.FC<OwnerInfoProps> = ({picture}) => {
  return (
    <div className="text-[12px] text-[#4C4C4c] align-left list-disc">
      <ul className="flex gap-2">
        <li>Stay with {picture.owner}</li>
        <li>{picture.hobby}</li>
      </ul>
    </div>
  );
};

export default OwnerInfo;
