# Pot-App Azure翻译插件（需要注册Azure账号）

## 使用方法

### 安装 Pot

此插件为 [Pot App](https://github.com/pot-app/pot-desktop) 翻译插件，必须配合 [Pot App](https://github.com/pot-app/pot-desktop) 来使用

### 安装插件

1. 下载 `.potext` 文件
2. 打开 Pot-偏好设置-服务设置-翻译-添加外部插件-安装外部插件
3. 选择刚刚下载的 `.potext` 文件，安装成功
4. 将插件添加到服务列表即可使用

### 注册 Azure 账号并获取密钥

1. 注册 Azure 账号（需要国际信用卡），官网：[Azure](https://azure.microsoft.com/en-us/pricing/purchase-options/azure-account?icid=ai-services)

2. [创建Blob存储帐户](https://portal.azure.com/#create/Microsoft.StorageAccount-ARM)

3. [创建Translator服务](https://portal.azure.com/#create/Microsoft.CognitiveServicesTextTranslation)

4. 进入[仪表板](https://portal.azure.com/#home), 点击菜单-资源管理-密钥和终结点，复制密钥和区域

### 参考链接

- [Azure Translate API](https://learn.microsoft.com/en-us/azure/ai-services/translator/document-translation/how-to-guides/use-rest-api-programmatically?pivots=programming-language-csharp&tabs=csharp)

- [Azure Translate Pricing](https://azure.microsoft.com/en-us/pricing/details/cognitive-services/translator/)
