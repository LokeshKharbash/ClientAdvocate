import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-base-page',
  templateUrl: './base-page.component.html',
  styleUrls: ['./base-page.component.scss']
})
export class BasePageComponent implements OnInit {
  emailText: String;
  teleText:String;
  posterText:String;

  constructor() { }

  ngOnInit(): void {
    this.emailText = `Subject: Maximizing Your Wealth and Securing Your Legacy: The Path to Preserve Your Retirement Savings for Alex Turner

    Dear Mr. Turner,
    
    I hope this letter finds you in good health and high spirits as you embark on a new chapter in your life after turning 70 last month. As an experienced Financial Advisor at Morgan Stanley, I am thrilled to extend my services to help you navigate the complexities of retirement and create a tailored strategy to optimize your wealth. Today, I am excited to present you with a game-changing opportunity to save significantly on your Required Minimum Distributions (RMDs) and secure your legacy through a Roth Conversion.
    
    🔷 Why Consider a Roth Conversion?
    
    As a high-net-worth individual, you have worked diligently to build your retirement nest egg. However, with the approach of RMDs at age 72, you may be concerned about the potential impact on your tax liabilities and the future growth of your portfolio. A Roth Conversion could be the perfect solution to address these concerns effectively.
    
    By converting a portion of your traditional retirement accounts to a Roth IRA, you can position yourself to benefit from tax-free growth and tax-free withdrawals during your lifetime. This strategic move will allow you to reduce or even eliminate RMD obligations, putting you in control of your finances and potentially saving you substantial sums in taxes.
    
    🔷 The Power of Tax Diversification
    
    As a high net worth individual, you understand the importance of diversification in your investment portfolio. Similarly, tax diversification is a vital aspect of wealth management. By incorporating a Roth IRA into your retirement plan, you'll gain access to a tax-free income stream alongside your taxable retirement accounts. This diversification will empower you to manage your tax situation more efficiently during retirement, providing flexibility and maximizing your overall wealth.
    
    🔷 Securing Your Legacy
    
    Preserving your hard-earned wealth for the benefit of your loved ones is of utmost importance. A Roth Conversion offers a unique advantage in estate planning, as Roth IRAs are not subject to income taxes upon inheritance. By strategically converting funds now, you can ensure that your beneficiaries receive a tax-free inheritance, setting the stage for a lasting legacy that can continue to grow and thrive for generations to come.
    
    🔷 Timing Is Critical
    
    Given the constantly evolving tax landscape, the timing of a Roth Conversion is crucial. As a seasoned Financial Advisor, I am committed to staying up-to-date with the latest tax laws and market trends. Taking action now will allow us to take advantage of current tax rates and protect your retirement savings from potential future tax increases.
    
    🔷 A Personalized Approach
    
    I understand that your financial goals and aspirations are unique. As your dedicated Financial Advisor, I will work closely with you to develop a personalized retirement strategy that aligns with your objectives and risk tolerance. Together, we will explore various financial planning tools and investment options, ensuring that your retirement journey is both successful and rewarding.
    
    🔷 Let's Take the Next Step
    
    Mr. Turner, I am honored to be part of your financial journey and to offer you the expertise and guidance needed to secure your financial future. I invite you to schedule a meeting with me at your earliest convenience, during which we can delve into the specifics of a Roth Conversion tailored to your financial situation.
    
    Together, we will unlock the potential of tax-free savings and create a lasting legacy for your loved ones. I look forward to meeting with you soon.
    
    Sincerely,
    
    [Your Name]
    Financial Advisor
    Morgan Stanley`;
    this.teleText = "this is abra ka dabra this is abra ka dabrathis is abra ka dabrathis is abra ka dabrathis is abra ka dabrathis is abra ka dabrathis is abra ka dabrathis is abra ka dabrathis is abra ka dabrathis is abra ka dabrathis is abra ka dabrathis is abra ka dabrathis is abra ka dabrathis is abra ka dabrathis is abra ka dabrathis is abra ka dabrathis is abra ka dabrathis is abra ka dabrathis is abra ka dabrathis is abra ka dabra "
    this.posterText = "this is abra ka dabra this is abra ka dabrathis is abra ka dabrathis is abra ka dabrathis is abra ka dabrathis is abra ka dabrathis is  "

  }

}
