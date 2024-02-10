import React from 'react'

interface AttributeRowProps {
  attribute: string;
  base: number;
  gain: number;
	attribute_type: string;
}

const AttributeRow = ({ attribute, base, gain, attribute_type }: AttributeRowProps) => {
  return (
    <div className="flex flex-col">
      <p className="small-text text-sm">{attribute}</p>
      <div className="flex flex-row items-center">
        <img
          className="w-6 h-6"
          src={`https://cdn.stratz.com/images/dota2/primary_attributes/${attribute_type.toLowerCase()}.png`}
          alt={attribute_type}
        />
        <p className="pl-2 stats-text">
          {base} + {gain.toFixed(1)}
        </p>
      </div>
    </div>
  );
};


export default AttributeRow