import { prisma } from "../lib/prisma";
import { CreateRoomInput } from "../validators/room.validator";

export async function createRoom(input: CreateRoomInput, ownerId: string) {
  const room = await prisma.room.create({
    data: {
      name: input.name,
      isBeginnerMode: input.isBeginnerMode,
      ownerId,
      memberships: {
        create: {
          userId: ownerId,
          role: "OWNER",
        },
      },
    },
    include: {
      memberships: true,
    },
  });

  return room;
}

export async function joinRoom(roomId: string, userId: string) {
  const room = await prisma.room.findUnique({
    where: { id: roomId },
  });

  if (!room) {
    throw new Error("Room not found");
  }

  const existingMembership = await prisma.roomMembership.findFirst({
    where: { roomId, userId },
  });

  if (existingMembership) {
    throw new Error("You are already a member of this room");
  }

  const membership = await prisma.roomMembership.create({
    data: {
      roomId,
      userId,
      role: "EDITOR",
    },
  });

  return membership;
}


// Design note: Jab room create hota hai, owner ko automatically OWNER role ke saath RoomMembership mil jata hai (nested create se) 
// — ye ensure karta hai ki owner khud bhi ek membership record ke through room access karta hai,
//  consistent permission-checking ke liye.
//  Naye members jo joinRoom karte hain unko default EDITOR role milta hai.



