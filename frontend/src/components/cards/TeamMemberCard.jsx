import React from 'react';

const TeamMemberCard = ({ member }) => {
  if (!member) return null;
  return (
    <article className="group">
      <div className="mb-4 aspect-3/4 overflow-hidden bg-[#F7F6F5]">
        <img
          src={member.image}
          alt={`${member.name} - ${member.role} at Moon`}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
          decoding="async"
        />
      </div>
      <div className="text-center">
        <h3 className="mb-1 text-sm leading-5 font-semibold tracking-wider text-[#3D3D4E] uppercase">
          {member.name}
        </h3>
        <p className="text-sm leading-7 text-[#5A5A5A]">{member.role}</p>
      </div>
    </article>
  );
};

export default TeamMemberCard;
