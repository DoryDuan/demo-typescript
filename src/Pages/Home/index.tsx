import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import ReactEcharts from "echarts-for-react";
import moment from "moment";
import request from "../../request";
import "./style.css";
import { Button, message } from "antd";
import { EChartOption } from "echarts";

// interface CourseItem {
//   title: string;
//   count: number;
// }

// interface dataStructure {
//   [key: string]: CourseItem[];
// }

interface State {
  isLogin: boolean;
  loaded: boolean;
  data: responseResult.DataStructure;
}

// Home 定义的类型：React.FC,或者 () => JSX.Element 默认是这个类型
class Home extends Component {
  state: State = {
    isLogin: true,
    loaded: false,
    data: {},
  };
  componentDidMount() {
    request.get("/api/isLogin").then((res) => {
      const data: responseResult.isLogin = res.data;
      if (!data) {
        this.setState({
          isLogin: false,
          loaded: true,
        });
      } else {
        this.setState({
          loaded: true,
        });
      }
    });
    request.get("/api/showData").then((res) => {
      const data: responseResult.showData = res.data;
      if (data) {
        this.setState({
          data: res.data,
        });
      }
    });
  }
  handleLogout = () => {
    request.get("/api/logout").then((res) => {
      const data: responseResult.logout = res.data;
      if (data) {
        this.setState({
          isLogin: false,
        });
      } else {
        message.error("退出失败");
      }
    });
  };
  handleCrowller = () => {
    request.get("/api/getData").then((res) => {
      const data: responseResult.getData = res.data;
      if (data) {
        message.success("爬取成功");
      } else {
        message.error("爬取失败");
      }
    });
  };
  getOption = (): echarts.EChartOption => {
    const { data } = this.state;
    const courseNames: string[] = [];
    const times: string[] = [];
    const tempData: {
      [key: string]: number[];
    } = {};
    for (let key in data) {
      const item = data[key];
      console.log(item);
      times.push(moment(Number(key)).format("MM-DD HH:mm"));
      item.forEach((innerItem) => {
        const { title, count } = innerItem;
        if (courseNames.indexOf(title) === -1) {
          courseNames.push(title);
        }
        tempData[title]
          ? tempData[title].push(count)
          : (tempData[title] = [count]);
      });
    }
    const result: echarts.EChartOption.Series[] = [];
    for (let i in tempData) {
      result.push({
        name: i,
        type: "line",
        data: tempData[i],
      });
    }
    return {
      title: {
        text: "课程在线学习人数",
      },
      tooltip: {
        trigger: "axis",
      },
      legend: {
        data: courseNames,
      },
      grid: {
        left: "3%",
        right: "4%",
        bottom: "3%",
        containLabel: true,
      },
      xAxis: {
        type: "category",
        boundaryGap: false,
        data: times,
      },
      yAxis: {
        type: "value",
      },
      series: result,
    };
  };
  render() {
    const { isLogin, loaded } = this.state;
    if (isLogin) {
      if (loaded) {
        return (
          <div className="home-page">
            <div className="btns">
              <Button type="primary" onClick={this.handleCrowller}>
                爬取
              </Button>
              <Button type="primary" onClick={this.handleLogout}>
                退出
              </Button>
            </div>
            <ReactEcharts option={this.getOption()} />
          </div>
        );
      } else {
        return null;
      }
    } else {
      return <Redirect to="/login" />;
    }
  }
}

export default Home;
