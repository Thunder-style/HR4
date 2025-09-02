import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp, TrendingDown } from "lucide-react";

const ScoreExtremes = ({ competencyData }) => {
  // 找出最高和最低得分维度
  const sortedData = [...competencyData].sort((a, b) => b.个人 - a.个人);
  const highestScore = sortedData[0];
  const lowestScore = sortedData[sortedData.length - 1];

  return (
    <div className="h-full grid grid-rows-2 gap-4">
      {/* 最高得分维度 */}
      <Card className="shadow-sm border-0 h-full flex flex-col">
        <CardHeader className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-t-lg pb-3 flex-shrink-0">
          <CardTitle className="text-base flex items-center gap-2 text-green-700">
            <TrendingUp className="h-5 w-5" />
            <span>最高得分维度</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="pt-4 flex-grow flex flex-col justify-center">
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-lg font-semibold">{highestScore.name}</span>
              <span className="text-2xl font-bold text-green-600">{highestScore.个人}</span>
            </div>
            <div className="flex justify-between text-sm text-gray-500">
              <span>整体平均</span>
              <span>{highestScore.整体}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span>与平均分差距</span>
              <span className={highestScore.差距 >= 0 ? "text-green-600" : "text-red-600"}>
                {highestScore.差距 > 0 ? "+" : ""}{highestScore.差距}
              </span>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* 最低得分维度 */}
      <Card className="shadow-sm border-0 h-full flex flex-col">
        <CardHeader className="bg-gradient-to-r from-red-50 to-orange-50 rounded-t-lg pb-3 flex-shrink-0">
          <CardTitle className="text-base flex items-center gap-2 text-red-700">
            <TrendingDown className="h-5 w-5" />
            <span>最低得分维度</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="pt-4 flex-grow flex flex-col justify-center">
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-lg font-semibold">{lowestScore.name}</span>
              <span className="text-2xl font-bold text-red-600">{lowestScore.个人}</span>
            </div>
            <div className="flex justify-between text-sm text-gray-500">
              <span>整体平均</span>
              <span>{lowestScore.整体}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span>与平均分差距</span>
              <span className={lowestScore.差距 >= 0 ? "text-green-600" : "text-red-600"}>
                {lowestScore.差距 > 0 ? "+" : ""}{lowestScore.差距}
              </span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ScoreExtremes;
