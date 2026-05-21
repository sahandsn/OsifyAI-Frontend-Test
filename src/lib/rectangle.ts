import { TImageCoordinates } from "@/types/services";

export function getRectanglePointsInPercentage(
  points: NonNullable<TImageCoordinates>[number],
): [[number, number], [number, number], [number, number], [number, number]] {
  const topLeft = [
    Math.min(points[0][0], points[1][0]),
    Math.min(points[0][1], points[1][1]),
  ];
  const bottomRight = [
    Math.max(points[0][0], points[1][0]),
    Math.max(points[0][1], points[1][1]),
  ];

  // Extract coordinates from the input
  const topLeftX = topLeft[0];
  const topLeftY = topLeft[1];
  const bottomRightX = bottomRight[0];
  const bottomRightY = bottomRight[1];

  // Calculate the other two points of the rectangle
  const topRight: [number, number] = [bottomRightX, topLeftY];
  const bottomLeft: [number, number] = [topLeftX, bottomRightY];

  // Return all four points in percentage
  return [
    [topLeftX, topLeftY], // Top-left
    topRight, // Top-right
    bottomLeft, // Bottom-left
    [bottomRightX, bottomRightY], // Bottom-right
  ];
}
