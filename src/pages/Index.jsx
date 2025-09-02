import { useState } from "react";
import { RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BookOpen, TrendingDown, TrendingUp, User, Award, BarChart3, Brain } from "lucide-react";
import CompetencyDetail from "../components/CompetencyDetail";
import RecommendationCard from "../components/RecommendationCard";
import ScoreExtremes from "../components/ScoreExtremes";

const Index = () => {
  // 模拟数据
  const expertInfo = {
    name: "张三",
    employeeId: "E123456",
    department: "配电运维中心",
    sequence: "技能序列",
    businessArea: "配电专业",
    title: "三级拔尖技能专家"
  };

  const overallData = [
    { name: "业绩评审", 个人: 85, 整体: 78 },
    { name: "笔试实操", 个人: 82, 整体: 80 },
    { name: "面试答辩", 个人: 75, 整体: 76 },
  ];

  const competencyData = [
    { name: "系统思考", 个人: 65, 整体: 72, 差距: -7 },
    { name: "组织协调", 个人: 78, 整体: 75, 差距: 3 },
    { name: "成果交付", 个人: 82, 整体: 78, 差距: 4 },
    { name: "专业应用", 个人: 85, 整体: 80, 差距: 5 },
    { name: "忠诚执行", 个人: 75, 整体: 76, 差距: -1 },
    { name: "总结呈现", 个人: 70, 整体: 74, 差距: -4 },
    { name: "人才培育", 个人: 68, 整体: 70, 差距: -2 },
    { name: "学习研究", 个人: 72, 整体: 75, 差距: -3 },
    { name: "不断求进", 个人: 76, 整体: 78, 差距: -2 },
    { name: "创新思维", 个人: 65, 整体: 70, 差距: -5 },
  ];

  const recommendations = [
    {
      competency: "系统思考",
      score: 65,
      gap: -7,
      suggestions: [
        "学习《如何高效开展课题研究项目》",
        "参加系统思维工作坊",
        "阅读《系统思考：复杂世界的简单法则》"
      ]
    },
    {
      competency: "创新思维",
      score: 65,
      gap: -5,
      suggestions: [
        "学习《创新思维训练》",
        "参加头脑风暴技巧培训",
        "阅读《创新者的窘境》"
      ]
    },
    {
      competency: "总结呈现",
      score: 70,
      gap: -4,
      suggestions: [
        "学习《高效汇报技巧》",
        "参加PPT制作培训",
        "阅读《金字塔原理》"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">专家选聘反馈报告</h1>
          <p className="text-gray-600">基于多维度的专业能力评估与发展建议</p>
        </div>
        
        {/* 专家个人信息卡片 */}
        <Card className="mb-8 shadow-sm border-0">
          <CardHeader className="pb-2 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-t-lg">
            <CardTitle className="text-lg flex items-center gap-2 text-blue-800">
              <User className="h-5 w-5" />
              <span>专家个人信息</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="flex flex-col">
                <span className="text-sm text-gray-500">姓名</span>
                <span className="font-medium text-gray-900">{expertInfo.name}</span>
              </div>
              <div className="flex flex-col">
                <span className="text-sm text-gray-500">员工编码</span>
                <span className="font-medium text-gray-900">{expertInfo.employeeId}</span>
              </div>
              <div className="flex flex-col">
                <span className="text-sm text-gray-500">所在部门(单位)</span>
                <span className="font-medium text-gray-900">{expertInfo.department}</span>
              </div>
              <div className="flex flex-col">
                <span className="text-sm text-gray-500">专家序列</span>
                <span className="font-medium text-gray-900">{expertInfo.sequence}</span>
              </div>
              <div className="flex flex-col">
                <span className="text-sm text-gray-500">业务领域</span>
                <span className="font-medium text-gray-900">{expertInfo.businessArea}</span>
              </div>
              <div className="flex flex-col">
                <span className="text-sm text-gray-500">专家称号</span>
                <span className="font-medium text-gray-900">{expertInfo.title}</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="space-y-8">
          {/* 选聘维度得分 */}
          <Card className="shadow-sm border-0">
            <CardHeader className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-t-lg">
              <CardTitle className="flex items-center gap-2 text-blue-800">
                <BarChart3 className="h-5 w-5" />
                <span>选聘维度得分</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <RadarChart data={overallData}>
                    <PolarGrid />
                    <PolarAngleAxis dataKey="name" />
                    <PolarRadiusAxis domain={[0, 100]} />
                    <Radar
                      name="个人得分"
                      dataKey="个人"
                      stroke="#3b82f6"
                      fill="#3b82f6"
                      fillOpacity={0.6}
                    />
                    <Radar
                      name="整体平均"
                      dataKey="整体"
                      stroke="#10b981"
                      fill="#10b981"
                      fillOpacity={0.6}
                    />
                    <Legend />
                    <Tooltip />
                  </RadarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>

          {/* 素质能力详细分析 */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            <div className="lg:col-span-3">
              <Card className="shadow-sm border-0">
                <CardHeader className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-t-lg">
                  <CardTitle className="flex items-center gap-2 text-blue-800">
                    <Brain className="h-5 w-5" />
                    <span>素质能力详细分析</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-6">
                  <div className="h-96">
                    <ResponsiveContainer width="100%" height="100%">
                      <RadarChart data={competencyData}>
                        <PolarGrid />
                        <PolarAngleAxis dataKey="name" />
                        <PolarRadiusAxis domain={[0, 100]} />
                        <Radar
                          name="个人得分"
                          dataKey="个人"
                          stroke="#3b82f6"
                          fill="#3b82f6"
                          fillOpacity={0.6}
                        />
                        <Radar
                          name="整体平均"
                          dataKey="整体"
                          stroke="#10b981"
                          fill="#10b981"
                          fillOpacity={0.6}
                        />
                        <Legend />
                        <Tooltip />
                      </RadarChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>
            </div>
            <div className="lg:col-span-1">
              <ScoreExtremes competencyData={competencyData} />
            </div>
          </div>

          {/* AI建议 */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <Award className="h-6 w-6 text-blue-600" />
              <h2 className="text-2xl font-bold text-gray-900">AI建议</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {recommendations.map((item, index) => (
                <RecommendationCard key={index} data={item} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
